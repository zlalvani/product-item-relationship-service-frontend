import json
import uuid
import random

def generate_submodel_descriptor (aas_id,submodel_id= None):

    submodel_descriptor = {}
    
    if submodel_id == None: 
        submodel_id = "urn:uuid:"+str(uuid.uuid4())
        
    with open('submodel_descriptor_template.json', 'r') as f:
        submodel_descriptor_template = json.load(f)

    submodel_descriptor = submodel_descriptor_template
    submodel_descriptor['identification'] = submodel_id
    endpointAddress = f"https://irs-provider-controlplane2.dev.demo.catena-x.net/{aas_id}-{submodel_id}/submodel?content=value&extent=withBlobValue"
    submodel_descriptor['endpoints'][0]['protocolInformation']['endpointAddress'] = endpointAddress
    
    return submodel_descriptor


def generate_submodel(identification):
    
    enum_result = ['yes','no','unknown']
    
    with open('submodel_template.json','r') as fi:
        submodel_temp = json.load(fi)

    submodel_temp['identification'] = identification
    submodel_temp['payload']['supplychain_impacted'] = random.choice(enum_result)

    return submodel_temp

with open('testdata_input.json', 'r') as f:
  data = json.load(f)


ess_submodel = {}
ess_submodel_descriptor = {}
res = {}
shells = []

res = data
submodels = data['submodels']

for shell in data['shells']:
    submodel_descriptor_res = shell
    aas_id = shell['identification']
    new_sub_des = shell['submodelDescriptors']
    
    submodel_descriptor_descriptor = generate_submodel_descriptor(aas_id)
    new_sub_des.append(submodel_descriptor_descriptor)
    
    submodel_descriptor_res['submodelDescriptors'] = new_sub_des
    shells.append(submodel_descriptor_res)
    
    submodel = generate_submodel(submodel_descriptor_descriptor['identification'])
    submodels.append(submodel)
    
res['shells'] = shells
res['submodels'] = submodels
res['tombstones'] = []
    
with open("testdata_output.json", "w") as outfile:
    outfile.write(json.dumps(res, indent=4))    
