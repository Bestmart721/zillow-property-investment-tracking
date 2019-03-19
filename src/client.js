/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from "react";

export default class Client extends React.Component {
    getProperties(success) {
        return fetch('/api/properties', {
                headers: {
                    Accept: 'application/json',
                },
            }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(success);

    }

    createProperty(data) {
        return fetch('/api/properties', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(this.checkStatus);
    }

    updateProperty(data) {
        return fetch('/api/properties', {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(this.checkStatus);
    }

    deleteProperty(data) {
        return fetch('/api/properties', {
            method: 'delete',
            body: JSON.stringify({ zpid: data }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(this.checkStatus);
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    }

    parseJSON(response) {
        return response.json();
    }
};