'use strict'


const Q = require('q')
,  _ = require('lodash')
, colectionname = 'release_information';

const release_data = [{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-July-2018'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '069',
    date : new Date('21-July-2018'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame80',
    release : '010',
    date : new Date('25-july-2018'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'server.fierydemo_flame8.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame8.0_211123131',
        spec_details : 'cws6.2 : 328321093, fierydriver : 6.2'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
},
{
    codebase : 'flame70',
    release : '070',
    date : new Date('21-Dec-1993'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame7.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
}]



module.exports.get = (search, options)=> {
   
    let return_data = release_data;
    return return_data;

}
