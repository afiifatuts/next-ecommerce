import { cookies } from 'next/headers';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, collections } from '@wix/stores';

export const wixClientServer = () => {
    let refreshToken;

    try {
        const cookieStore = cookies();
        refreshToken = JSON.parse(cookieStore.get('refreshToken')?.value || '{}');
    } catch (error) {}

    const clientServer = createClient({
        modules: {
            products,
            collections,
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            tokens: {
                refreshToken,
                accessToken: { value: '', expiresAt: 0 },
            },
        }),
    });

    return clientServer;
};
