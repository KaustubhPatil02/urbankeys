import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'  // Add this import

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

export async function login() {
    try {
        const redirectURI = Linking.createURL('/login')
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectURI)

        if (!response) throw new Error('No response from Appwrite, Failed to Login');

        const browserResult = await WebBrowser.openAuthSessionAsync(
            response.toString(),
            redirectURI
        )

        if (browserResult.type !== 'success') throw new Error('Browser result not successful')

        const url = new URL(browserResult.url)
        const secret = url.searchParams.get('secret')?.toString()
        const userID = url.searchParams.get('userID')?.toString()

        if (!secret || !userID) throw new Error('No secret or userID in URL')

        const session = await account.createSession(userID, secret);
        if (!session) throw new Error('No session created')

        return true;
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function logout() {
    try {
        await account.deleteSession('current')
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}


export async function getUser() {
    try {
        const response = await account.get()
        if (response.$id) {
            const avatarURL = await avatar.getInitials(response.name)
            return {
                ...response,
                avatar: avatarURL.toString(),
            }
        }
    } catch (error) {
        console.log(error)
        return null
    }
}