import { Form, useOutletContext } from 'react-router-dom';

import Image from '../common/Image/Image';
import example1 from '../images/I/example1.png';
import example2 from '../images/I/example2.png';

export default function Contact() {
  const { isSidebarOpened } = useOutletContext();
  const contact = {
    first: 'I-page',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  };

  return (
    <>
      <div id='contact'>
        <Image imgSrc={example1} />
        {/* <Image imgSrc='https://placekitten.com/g/200/200' /> */}

        <div>
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{' '}
            <Favorite contact={contact} />
          </h1>

          {contact.twitter && (
            <p>
              <a target='_blank' href={`https://twitter.com/${contact.twitter}`}>
                {contact.twitter}
              </a>
            </p>
          )}

          {contact.notes && <p>{contact.notes}</p>}

          <div>
            <Form action='edit'>
              <button type='submit'>Edit</button>
            </Form>
            <Form
              method='post'
              action='destroy'
              onSubmit={(event) => {
                // eslint-disable-next-line no-restricted-globals
                if (!confirm('Please confirm you want to delete this record.')) {
                  event.preventDefault();
                }
              }}
            >
              <button type='submit'>Delete</button>
            </Form>
          </div>
        </div>
      </div>
      <Image imgSrc={example2} isSidebarOpened={isSidebarOpened} />
    </>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method='post'>
      <button
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
