# data-feed

Data feed presentation as alternative to table.

<a href="https://www.npmjs.com/package/data-feed">
    <img src="https://nodei.co/npm/data-feed.png?mini=true">
</a>

## Installation:

```
npm install data-feed
```

## Requirements

- `redux-form` should be installed and configured with `form` reducer.

```tsx
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
  /* app's reducers */
});

```

## Set Up

### Reducer

Add feed reducer:

```tsx
import { combineReducers } from 'redux'
import { feedReducer } from 'data-feed';

const rootReducer = combineReducers({
  feed: feedReducer
  /* app's reducers */
});

```

### Saga

Add feed saga:

```tsx
import { FeedSaga } from 'data-feed';

export function* RootSaga(): SagaIterator {
    yield all([fork(FeedSaga)]);
    /* app's sagas */
}

```




