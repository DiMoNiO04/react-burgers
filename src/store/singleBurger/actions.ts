import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL_BURGERS } from '@/utils/consts'

import { IBurger } from '../burgers/types'
import { IFetchSingleBurgerProps } from './types'

export const fetchSingleBurger = createAsyncThunk<IBurger, IFetchSingleBurgerProps>(
  'singleBurger/fetchBurger',
  async ({ id }) => (await axios.get<IBurger>(`${API_URL_BURGERS}/${id}`)).data,
)
