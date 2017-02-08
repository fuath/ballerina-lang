/**
 * Copyright (c) 2016-2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['require', 'log', 'lodash', 'event_channel'],
    function (require, log, _, EventChannel) {

        /**
         * @class Package
         * @augments EventChannel
         * @param args {Object} - args.name: name of the package
         * @constructor
         */
        var ConnectorAction = function (args) {
            this._name = _.get(args, 'name', '');
            this._id = _.get(args, 'id', '');
            this.action = _.get(args, 'action', '');
        };

        ConnectorAction.prototype = Object.create(EventChannel.prototype);
        ConnectorAction.prototype.constructor = ConnectorAction;

        ConnectorAction.prototype.setName = function (name) {
            var oldName = this._name;
            this._name = name;
            this.trigger("name-modified", name, oldName);
        };

        ConnectorAction.prototype.getName = function () {
            return this._name;
        };

        /**
         * sets the id
         * @param {string} id
         */
        ConnectorAction.prototype.setId = function (id) {
            this._id = id;
        };

        /**
         * returns the id
         * @returns {string}
         */
        ConnectorAction.prototype.getId = function () {
            return this._id;
        };

        ConnectorAction.prototype.setAction = function (action) {
            this.action = action;
        };

        ConnectorAction.prototype.getAction = function () {
            return this.action;
        };

        ConnectorAction.prototype.initFromJson = function (jsonNode) {
            this.setName(jsonNode.name);
            this.setAction(jsonNode.name);
        };

        return ConnectorAction;
    });