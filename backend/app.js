import express from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
import { addCustomer, deleteCustomer, getCustomer, getCustomerDetails, getCustomers, updateCustomer } from './services/customers';
import { addContact, deleteContact, getContact, getContactDetails, getContacts, getContactSearch, updateContact } from './services/contacts';
import { googleLogIn, GoogleSignUp } from './services/googleSignUp';
const session = require('express-session');

const app = express();

const unGuards = [
    '/login',
    '/logout',
    '/signup',
];

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/contacts', authGurd, getContacts); 
app.get('/contacts/:select/:search', authGurd, getContactSearch); 
app.post('/contacts/add', authGurd, addContact); 
app.delete('/contacts/delete/:contactId', authGurd, deleteContact); 
app.get('/contactEdit/:id', authGurd, getContact); 
app.put('/contactEdit/:id', authGurd, updateContact);
app.get('/contactDetails/:id', authGurd, getContactDetails); 

app.get('/customers', authGurd, getCustomers); 
app.post('/customers/add', authGurd, addCustomer); 
app.delete('/customers/delete/:customerId', authGurd, deleteCustomer); 
app.get('/customerEdit/:id', authGurd, getCustomer); 
app.put('/customerEdit/:id', authGurd, updateCustomer); 
app.get('/customerDetails/:id', authGurd, getCustomerDetails); 

app.post('/googleSignUp', GoogleSignUp);
app.post('/googleSignUp', googleLogIn);

app.get('/login', getLoginStatus);
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);
