import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/productsActions';
import * as types from '../../constants/ActionTypes';
import nock from 'nock';
import expect from 'expect.js';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {
  afterEach(function() {
    nock.cleanAll()
  });

  it('creates FETCH_PRODUCTS_FULFILLED when fetching products', function() {
    nock('http://example.com/')
      .get('/products')
      .reply(200, { body: { products: [] } })

    const expectedActions = [
      { type: types.FETCH_PRODUCTS },
      { type: types.FETCH_PRODUCTS_FULFILLED, body: { products: ['product1'] } }
    ]
    const store = mockStore({ products: [] })

    return store.dispatch(actions.fetchProducts()).then(() => {
      expect(store.getActions()).to.eql(expectedActions)
    })
  });

});
