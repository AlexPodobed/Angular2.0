import { IUser, IToken, IAuthResponse } from '../../entities';

export const AuthHelper = {
    get uuid(): string {
        /* tslint:disable */
        return 'xxxxxxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        /* tslint:enable */
    },

    getUserMock(email: string, password: string): IUser {
        return {
            email, password,
            id: this.uuid
        };
    },

    getTokenMock(): IToken {
        return {
            access_token: this.uuid,
            refresh_token: this.uuid,
            token_type: 'bearer',
            expires_in: 3600
        };
    },

    fakeLoginRequest(email: string, password: string): Promise<IAuthResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    user: this.getUserMock(email, password),
                    token: this.getTokenMock()
                });
            }, 800);
        });
    }
};
