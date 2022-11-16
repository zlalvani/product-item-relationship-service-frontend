/********************************************************************************
 * Copyright (c) 2021,2022 BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation.
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import Keycloak from "keycloak-js";

import { getCentralIdp, getClientId, getClientIdDigitalTwin, getClientIdSemantic } from "./EnvironmentService";
import { error, info } from "./LogService";

export interface IUser {
  userName: string;
  name: string;
  email: string;
  company: string;
  tenant: string;
  roles: Array<string>;
  isAdmin: boolean;
  token: string;
  parsedToken: string;
}

export enum ROLES {
  EVERYONE = "*",
  CX_ADMIN = "CX Admin",
  ADMIN_CONNECTOR = "Admin - Connector Setup",
  ADMIN_USER = "Admin - User Management",
  INVITE_NEW_PARTNER = "invite_new_partner",
  SETUP_IDP = "setup_idp",
  SETUP_CLIENT = "setup_client",
  APPSTORE_VIEW = "view_apps",
  APPSTORE_VIEW_SERVICES = "view_services",
  APPSTORE_VIEW_DATASPACES = "view_dataspaces",
  APPSTORE_ADD = "add_app",
  APPSTORE_EDIT = "edit_apps",
  APPSTORE_FILTER = "filter_apps",
  APPSTORE_DELETE = "delete_apps",
  CONNECTOR_SETUP = "setup_connector",
  DATACATALOG_VIEW = "view_data_catalog",
  DIGITALTWIN_VIEW = "view_digital_twin",
  DIGITALTWIN_ADD = "add_digital_twin",
  DIGITALTWIN_DELETE = "delete_digital_twin",
  SEMANTICHUB_VIEW = "view_semantic_model",
  SEMANTICHUB_ADD = "add_semantic_model",
  SEMANTICHUB_DELETE = "delete_semantic_model",
  USERMANAGEMENT_VIEW = "view_user_management",
  USERMANAGEMENT_ADD = "add_user_account",
  USERMANAGEMENT_DELETE = "delete_user_account",
  TECHUSER_VIEW = "view_tech_user_management",
  TECHUSER_ADD = "add_tech_user_management",
  TECHUSER_DELETE = "delete_tech_user_management",
  MODIFY_USER_ACCOUNT = "modify_user_account",
  ORGANIZATION_VIEW = "view_organization",
  PARTNER_NETWORK_VIEW = "view_partner_network",
  DEVELOPER = "catenax_developer",
  TECHNICAL_SETUP_VIEW = "view_technical_setup",
  FE_DEVELOPER = "FE Developer",
  VIEW_APP_RELEASE = "view_app_release",
}

const keycloakConfig: Keycloak.KeycloakConfig = {
  url: getCentralIdp(),
  realm: "CX-Central",
  clientId: getClientId(),
};

const keycloakConfigSemantic: Keycloak.KeycloakConfig = {
  url: getCentralIdp(),
  realm: "CX-Central",
  clientId: getClientIdSemantic(),
};

const keycloakConfigDigitalTwin: Keycloak.KeycloakConfig = {
  url: getCentralIdp(),
  realm: "CX-Central",
  clientId: getClientIdDigitalTwin(),
};

// TODO: add an ESLint exception until there is a solution
/* eslint @typescript-eslint/no-explicit-any: "off" */
const KC = new (Keycloak as any)(keycloakConfig);

const update = () => {
  //info(`${getUsername()} updating token`)
  KC.updateToken(50)
    .then((refreshed: boolean) => {
      refreshed && info(`${getUsername()} token refreshed ${refreshed}`);
      // store.dispatch(setLoggedUser(getLoggedUser()));
    })
    .catch(() => {
      error(`${getUsername()} token refresh failed`);
    });
};

const init = (onAuthenticatedCallback: (loggedUser: IUser) => any) => {
  KC.init({
    onLoad: "login-required",
    pkceMethod: "S256",
  }).then((authenticated: boolean) => {
    if (authenticated) {
      info(`${getUsername()} authenticated`);
      // AccessService.init();
      onAuthenticatedCallback(getLoggedUser());
      // store.dispatch(setLoggedUser(getLoggedUser()));
      setInterval(update, 50000);
    } else {
      error(`${getUsername()} authentication failed`);
    }
  });
};

KC.onTokenExpired = () => {
  info(`${getUsername()} token expired`);
  update();
};

const doLogin = KC.login;

const doLogout = KC.logout;

const getToken = () => KC.token;

const getParsedToken = () => KC.tokenParsed;

const getUsername = () => KC.tokenParsed?.preferred_username;

const getName = () => KC.tokenParsed?.name;

const getEmail = () => KC.tokenParsed?.email;

const getCompany = () => KC.tokenParsed?.organisation;

const getTenant = () => KC.tokenParsed?.tenant;

// TODO: add a more sustainable logic for role management with multiple clients
// not sustainable because client roles need to be unique across all clients
const getRoles = () =>
  KC.tokenParsed?.resource_access[keycloakConfig.clientId]?.roles.concat(
    KC.tokenParsed?.resource_access[keycloakConfigSemantic.clientId]?.roles,
    KC.tokenParsed?.resource_access[keycloakConfigDigitalTwin.clientId]?.roles,
  );

const hasRole = (role: string) => getRoles()?.includes(role);

const isAdmin = () => hasRole(ROLES.CX_ADMIN);

const isLoggedIn = () => !!KC.token;

const getLoggedUser = () => ({
  userName: getUsername(),
  name: getName(),
  email: getEmail(),
  company: getCompany(),
  tenant: getTenant(),
  roles: getRoles(),
  isAdmin: isAdmin(),
  token: getToken(),
  parsedToken: getParsedToken(),
});

const UserService = {
  doLogin,
  doLogout,
  getToken,
  getParsedToken,
  getEmail,
  getUsername,
  getName,
  getCompany,
  getTenant,
  getRoles,
  hasRole,
  init,
  isAdmin,
  isLoggedIn,
};

export default UserService;
