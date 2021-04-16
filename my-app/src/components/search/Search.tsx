import styles from "./search.module.css"
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {getTrackBackground, Range} from 'react-range';
import {getUsers, SearchStateType, setRangeForPacks} from "../../store/search-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

export const Search: FC<SearchPropsType> = (props) => {
    const dispatch = useDispatch()
    let state = useSelector<AppRootStateType, SearchStateType>(state => state.packsSearch)
    let {minCardsCount, maxCardsCount} = props
    let [values, setValues] = useState<Array<number>>([props.minCardsCount, props.maxCardsCount]);
    let [searchRequest, setSearchRequest] = useState<string>('')

    useEffect(() => {
        dispatch(setRangeForPacks(minCardsCount, maxCardsCount))
    }, [dispatch, state.minCardsCount, state.maxCardsCount])

    const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchRequest(event.target.value)
    }
    const sendSearchRequestHandler = () => {
        dispatch(getUsers(searchRequest, values[0], values[1]))
    }
    return (
        <>
            <input
                type="search"
                placeholder={'Search...'}
                onChange={event => onSearchHandler(event)}/>
            <Range
                values={values}
                step={1}
                min={minCardsCount}
                max={maxCardsCount}
                onChange={values => setValues(values)}
                renderTrack={({props, children}) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '50%',
                            margin: '30px',
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values: values,
                                    colors: ['#ccc', '#548BF4', '#ccc'],
                                    min: minCardsCount,
                                    max: maxCardsCount
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({index, props, isDragged}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '12px',
                            width: '12px',
                            borderRadius: '1px',
                            backgroundColor: '#FFF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '-28px',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                padding: '4px',
                                borderRadius: '4px',
                                backgroundColor: '#548BF4'
                            }}
                        >
                            {values[index].toFixed(0)}
                            {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
                        </div>
                        <div
                            style={{
                                height: '16px',
                                width: '5px',
                                backgroundColor: isDragged ? '#548BF4' : '#CCC'
                            }}
                        />
                    </div>
                )}
            />
            <button className={styles.searchBtn}
                    onClick={sendSearchRequestHandler}>
                Search
            </button>
        </>
    );
};

type SearchPropsType = {
    minCardsCount: number
    maxCardsCount: number
}


