/*
 *  Copyright 2017 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

/* global describe it */

import assert from 'assert';

describe('@Debounce decorator', () => {

    it('sanity check', () => {
        let called = 0;

        class C {
            @Debounce(100)
            method() {
                called++;
            }
        }

        let c = new C();
        c.method();
        c.method();
        c.method();

        assert.equal(called, 0);
    });

});
