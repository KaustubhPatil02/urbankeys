import {Account, Avatars, Client} from 'react-native-appwrite'
export const config = {
    platform: 'com.company.urbankeys',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();
client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login(){
    try {
        
        
    } catch (error) {
        console.log(error)
        return false
    }
}

function setProject(arg0: string) {
    throw new Error('Function not implemented.');
}
function setPlatform(arg0: string) {
    throw new Error('Function not implemented.');
}

