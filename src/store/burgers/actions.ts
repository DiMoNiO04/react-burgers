import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IBurger, IFetchBurgersProps } from './types'

export const fetchBurgers = createAsyncThunk<IBurger[], IFetchBurgersProps>('burgers/fetchBurgers', async ({ apiUrl }) => (await axios.get<IBurger[]>(apiUrl)).data)
