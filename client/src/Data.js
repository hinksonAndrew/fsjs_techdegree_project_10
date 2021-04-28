import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  /**
   * Checks to see if user exists in database. Returns error if no user found.
   * @param {userEmailAddress} emailAddress 
   * @param {userPassword} password 
   * @returns 
   */
  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }

  /**
   * Allows a user to create a user account. Adds them to database if no validation errors
   * exist.
   * @param {userInfo} user 
   * @returns 
   */
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      })
    } else {
      throw new Error();
    }
  }

  /**
   * Allows a course to be created by logged in user.
   * @param {courseInfo} course 
   * @param {userEmailAddress} emailAddress 
   * @param {userPassword} password 
   * @returns 
   */
  async createCourse(course, emailAddress, password) {
    const response = await this.api('/courses', 'POST', course, true, {emailAddress, password});
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      })
    } else {
      throw new Error();
    }
  }

  /**
   * Allows an authorized user to update their course.
   * @param {courseId} id 
   * @param {courseInfo} course 
   * @param {userEmailAddress} emailAddress 
   * @param {userPassword} password 
   * @returns 
   */
  async updateCourse(id, course, emailAddress, password) {
    const response = await this.api(`/courses/${id}`, 'PUT', course, true, {emailAddress, password});
    if (response.status === 204) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      })
    } else {
      throw new Error();
    }
  }

  /**
   * Allows a course to be deleted by its author/authorized user.
   * @param {courseId} id 
   * @param {userEmailAddress} emailAddress 
   * @param {userPassword} password 
   */
  async deleteCourse(id, emailAddress, password) {
    const response = await this.api(`/courses/${id}`, 'DELETE', null, true, {emailAddress, password});
    if (response.status === 204) {
      console.log('Delete Successfull');
    } else {
      throw new Error();
    }
  }
}