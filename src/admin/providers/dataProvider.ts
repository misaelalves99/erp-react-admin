// src/admin/providers/dataProvider.ts
import fakeRestProvider from 'ra-data-fakerest';
import { makeDb } from '../../data/db';

const LATENCY_MS = 350;

export const dataProvider = fakeRestProvider(makeDb(), true, LATENCY_MS);
