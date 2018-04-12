import Mock from 'mockjs'

Mock.setup({
  timeout: 10-100
})

const data = Mock.mock(
  '/api/book/get',
  {
    'books|0-10': [{
      'id|+1': 1,
      'title': "@ctitle(2, 10)"
    }]
  }
);

export default {
  data
}
