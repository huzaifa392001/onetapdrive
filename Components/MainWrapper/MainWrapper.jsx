"use client"
import { persistor, store } from '@/Redux/Store';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MainWrapper({ children }) {
    useEffect(() => {
        persistor.purge().then(() => {
            console.log("Persisted state cleared!");
        });
    })
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}

export default MainWrapper;
