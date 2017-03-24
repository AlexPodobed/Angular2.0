import { IUser } from './user.model';
import { IToken } from './token.model';

export interface IAuthResponse {
    user: IUser;
    token: IToken;
}
