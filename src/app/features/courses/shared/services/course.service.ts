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

/* tslint:disable */
@Injectable()
export class CourseService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com';
    // private courseSource: BehaviorSubject<ICourse[]>;

    constructor(private http: AuthorizedHttp) {
        // this.courseSource = new BehaviorSubject(this.COURSES);
    }

    public getAllSimple({page, size}) {
        let requestOptions = new RequestOptions();
        let urlParams: URLSearchParams = new URLSearchParams();

        urlParams.set('page', page.toString());
        urlParams.set('size', size.toString());

        requestOptions.search = urlParams;

        return this.http.get(`${CourseService.BASE_URL}/courses`, requestOptions)
            .map((res: Response) => res.json());
    }

    public getAll({ page, size, query }: ICoursesRequest): Observable<ICoursePagingResponse> {
        let requestOptions = new RequestOptions();
        let urlParams: URLSearchParams = new URLSearchParams();

        urlParams.set('page', (--page).toString());
        urlParams.set('size', size.toString());
        query && urlParams.set('query', query);
        requestOptions.search = urlParams;

        return this.http.get(`${CourseService.BASE_URL}/courses`, requestOptions)
            .map((res: Response) => res.json());
    }

    public save(course: ICourse): void {
        // this.COURSES.push(course);
        // this.courseSource.next([...this.COURSES]);
    }

    public update(course: ICourse): void {
        // let index = findIndex(this.COURSES, { id: course.id });
        // this.COURSES[index] = course;
        //
        // this.courseSource.next([...this.COURSES]);
    }

    public remove(id: number): Observable<any> {
        let requestOptions = new RequestOptions();

        return this.http.delete(`${CourseService.BASE_URL}/courses/${id}`, requestOptions)
            .map((res: Response) => res.json());
    };

}
