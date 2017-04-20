import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { ICourse } from '../course.model';

import { find, findIndex } from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthorizedHttp } from "../../../../core/services";

/* tslint:disable */
@Injectable()
export class CourseService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com';
    private static delay: number = 250;

    private courseSource: BehaviorSubject<ICourse[]>;
    private COURSES: ICourse[] = [
        {
            id: 1,
            title: 'Video course 1',
            topRated: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias eius esse eveniet, facilis fugit iste itaque iusto officiis voluptatibus. Animi deleniti deserunt, dignissimos dolor libero repellat tempore voluptate. Neque!',
            duration: 78,
            createdAt: 1489013473174
        }, {
            id: 2,
            title: 'Video course 2',
            topRated: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque dignissimos doloremque earum ipsa, iusto maiores numquam obcaecati, officia officiis praesentium sequi tempora veritatis. Aperiam blanditiis dolores quidem rerum sapiente?',
            duration: 110,
            createdAt: 1490699663584
        }, {
            id: 3,
            title: 'Video course 3',
            topRated: true,
            description: 'Commodi debitis magnam maxime numquam. At deserunt dolores eaque laudantium obcaecati quibusdam saepe vero? Consequatur eius eum ex optio saepe tenetur. Consectetur doloribus eaque fugit, inventore quam ut voluptatum. Aspernatur.',
            duration: 90,
            createdAt: 1491013473174
        }, {
            id: 4,
            title: 'Video course 4',
            description: 'Dignissimos omnis, voluptas? Alias animi asperiores aut doloribus facere incidunt maxime nemo nihil quibusdam voluptates. Accusamus commodi deleniti doloribus et labore laborum magnam recusandae vel. Illum qui quo soluta veniam.',
            topRated: false,
            duration: 40,
            createdAt: 1489203473174
        }, {
            id: 5,
            title: 'Video course 5',
            topRated: false,
            description: 'Cumque et in iste molestiae nemo nulla quibusdam ut vel voluptatem voluptatibus. Asperiores dolorum iste nam nemo provident quia ullam veritatis voluptatum? Dolores illum laborum numquam officia quidem repellendus, tempora.',
            duration: 250,
            createdAt: 1498733473174
        }
    ];

    constructor(private http: AuthorizedHttp) {
        this.courseSource = new BehaviorSubject(this.COURSES);
    }

    public getAll(page: number = 0, size: number = 5): Observable<ICourse[]> {
        let requestOptions = new RequestOptions();
        let urlParams: URLSearchParams = new URLSearchParams();

        urlParams.set('page', page.toString());
        urlParams.set('size', size.toString());
        requestOptions.search = urlParams;

        console.log(111111111)

        return this.http.get(`${CourseService.BASE_URL}/courses`, requestOptions)
            .map((res: Response) => res.json());
    }

    public getById(id: number): Observable<ICourse> {
        return this.courseSource.map((courses: ICourse[]) => find(courses, (course: ICourse) => course.id === id));
    }

    public save(course: ICourse): void {
        this.COURSES.push(course);
        this.courseSource.next([...this.COURSES]);
    }

    public update(course: ICourse): void {
        let index = findIndex(this.COURSES, { id: course.id });
        this.COURSES[index] = course;

        this.courseSource.next([...this.COURSES]);
    }

    public remove(id: number): Observable<any> {
        let requestOptions = new RequestOptions();

        return this.http.delete(`${CourseService.BASE_URL}/courses/${id}`, requestOptions)
            .map((res: Response) => res.json());



        // let index = findIndex(this.COURSES, { id });
        // this.COURSES.splice(index, 1);
        //
        // this.courseSource.next([...this.COURSES]);
    };

}
