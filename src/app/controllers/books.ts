/* eslint-disable @typescript-eslint/no-unused-vars */
let books = [
   {
     id: 1,
     title: 'Maharana Pratap : The Invincible Warrior',
     author: 'Rima Hooja'
   },
   {
     id: 2,
     title: 'Prithviraj Chauhan - A Light on the Mist in History',
     author: 'Virendra Singh Rathore'
   },
   {
     id: 3,
     title: 'Rani Laxmibai: Warrior-Queen of Jhansi',
     author: 'Pratibha Ranade'
   }
 ] 

// Handlers
export const getAllBooks = async (req, reply) => {  
}
export const getBook = async (req, reply) => {
   const id = Number(req.params.id) 
   const book = books.find(book => book.id === id)
   return book
}
export const addBook = async (req, reply) => {
   const id = books.length + 1
   const newBook = {
      id,
      title: req.body.title,
      author: req.body.author
   }
   books.push(newBook)
   return newBook
}

export const updateBook = async (req, reply) => {
   const id = Number(req.params.id)
   books = books.map(book => {
      if (book.id === id) {
         return {
            id,
            title: req.body.title,
            author: req.body.author
         }
      }
   })
   return {
      id,
      title: req.body.title
   }
}

export const deleteBook = async (req, reply) => {
   const id = Number(req.params.id)

   books = books.filter(book => book.id !== id)
   return {
      msg: `Blog with ID ${id} is deleted`
   }
}