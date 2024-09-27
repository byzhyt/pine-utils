/**
 * @jest-environment jsdom
 */

import {random} from '../src/index.ts'
import * as test from "node:test";


test('', () => {
    const result = random(1, 50);
    expect(result).toBe(8);
})

