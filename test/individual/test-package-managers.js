'use strict';
const packageManagers = require('../../lib/package-managers');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

chai.should();
chai.use(chaiAsPromised);

// the directory with the test package.json
const testDir = path.resolve(__dirname, '../ncu');

describe('package-managers', () => {

    describe('npm', function () {
        this.timeout(30000);

        it('list', () => {
            return packageManagers.npm.list({prefix: testDir}).should.eventually.have.property('express');
        });

        it('latest', () => {
            return packageManagers.npm.latest('express', null, {prefix: testDir}).then(parseInt).should.eventually.be.above(1);
        });

        it('greatest', () => {
            return packageManagers.npm.greatest('express', null, {prefix: testDir}).then(parseInt).should.eventually.be.above(1);
        });

    });

});
