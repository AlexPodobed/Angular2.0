import {Injectable} from '@angular/core';
import {ICourse} from './course.model';
/* tslint:disable */
@Injectable()
export class CourseService {
    public getCourses(): ICourse[] {
        return [
            {
                id: 1,
                title: 'Video course 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias eius esse eveniet, facilis fugit iste itaque iusto officiis voluptatibus. Animi deleniti deserunt, dignissimos dolor libero repellat tempore voluptate. Neque!',
                duration: 3620000,
                createdAt: 1488903473174
            }, {
                id: 2,
                title: 'Video course 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque dignissimos doloremque earum ipsa, iusto maiores numquam obcaecati, officia officiis praesentium sequi tempora veritatis. Aperiam blanditiis dolores quidem rerum sapiente?',
                duration: 4600000,
                createdAt: 1488903473174
            }, {
                id: 3,
                title: 'Video course 3',
                description: 'Commodi debitis magnam maxime numquam. At deserunt dolores eaque laudantium obcaecati quibusdam saepe vero? Consequatur eius eum ex optio saepe tenetur. Consectetur doloribus eaque fugit, inventore quam ut voluptatum. Aspernatur.',
                duration: 1240000,
                createdAt: 1488903473174
            }, {
                id: 4,
                title: 'Video course 4',
                description: 'Dignissimos omnis, voluptas? Alias animi asperiores aut doloribus facere incidunt maxime nemo nihil quibusdam voluptates. Accusamus commodi deleniti doloribus et labore laborum magnam recusandae vel. Illum qui quo soluta veniam.',
                duration: 3800000,
                createdAt: 1488903473174
            }, {
                id: 5,
                title: 'Video course 5',
                description: 'Cumque et in iste molestiae nemo nulla quibusdam ut vel voluptatem voluptatibus. Asperiores dolorum iste nam nemo provident quia ullam veritatis voluptatum? Dolores illum laborum numquam officia quidem repellendus, tempora.',
                duration: 2600000,
                createdAt: 1488903473174
            }
        ];
    }
}
