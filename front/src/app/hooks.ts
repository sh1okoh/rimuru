import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch,RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppDispatch: () => any = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
