import { IUser } from './user.model';
import { IToken } from './token.model';

export interface IAuthResponse {
    error?: any;
    user: IUser;
    token: IToken;
}
