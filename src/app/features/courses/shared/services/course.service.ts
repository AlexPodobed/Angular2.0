import { Injectable } from '@angular/core';
import { RequestOptions, Response, URLSearchParams } from '@angular/http';

import { ICourse } from '../course.model';

import { find, findIndex } from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthorizedHttp } from '../../../../core/services';

export interface ICoursesRequest {
    page: number;
    size: number;
    query: string;
    total?: number;
}

export interface ICoursePagingResponse {
    items: ICourse[];
    total: number;
    size: number;
    page: number;
}

@Injectable()
export class CourseService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com/courses';

    constructor(private http: AuthorizedHttp) {
    }

    public getAll({ page, size, query }: ICoursesRequest): Observable<ICoursePagingResponse> {
        let requestOptions = new RequestOptions();
        let urlParams: URLSearchParams = new URLSearchParams();

        urlParams.set('page', page.toString());
        urlParams.set('size', size.toString());

        if (query) {
            urlParams.set('query', query);
        }
        requestOptions.search = urlParams;

        return this.http.get(CourseService.BASE_URL, requestOptions)
            .map((res: Response) => res.json());
    }

    public get(id: string): Observable<ICourse> {
        return this.http.get(`${CourseService.BASE_URL}/${id}`)
            .map((res: Response) => res.json());
    }

    public save(course: ICourse): Observable<ICourse> {
        return this.http.post(CourseService.BASE_URL, course)
            .map((res: Response) => res.json());
    }

    public update(course: ICourse): Observable<ICourse> {
        return this.http.put(`${CourseService.BASE_URL}/${course.id}`, course)
            .map((res: Response) => res.json());
    }

    public remove(id: number): Observable<any> {
        let requestOptions = new RequestOptions();

        return this.http.delete(`${CourseService.BASE_URL}/${id}`, requestOptions)
            .map((res: Response) => res.json());
    };

}
