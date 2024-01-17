import * as booksController from '../controllers/books'

const bookRoutes = [{
    method: 'GET',
       url: '/api/books',
       handler: booksController.getAllBooks
    },
    {
       method: 'GET',
       url: '/api/books/:id',
       handler: booksController.getBook
    },
    {
       method: 'POST',
       url: '/api/books',
       handler: booksController.addBook
    },
    {
       method: 'PUT',
       url: '/api/books/:id',
       handler: booksController.updateBook
    },
    {
       method: 'DELETE',
       url: '/api/books/:id',
       handler: booksController.deleteBook
    }
    ]

export default bookRoutes;