import Application from 'embroider-ember-3-27-beta-repro/app';
import config from 'embroider-ember-3-27-beta-repro/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
