import { Form, useOutletContext } from 'react-router-dom';

import Image from '../common/Image/Image';
import importAll from '../../utils/importAll';
import './I.css';
import hth from './HighwayToHell.mp3';

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

  const images = importAll(require.context(`../images/I/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <div className='audioContainer'>
        {/* Here we have to import the audio source file and then put it into src tag  */}
        <audio src={hth} controls autoPlay />
      </div>
      <div className='imageTextContainer'>
        <Image imgSrc={images['feb_1.png']} isSidebarOpened={isSidebarOpened} />

        <div className='textUnderImage'>
          👉 Was it the first time, that I made you laugh a lot , and left a deep impression on you ?
        </div>
      </div>
      <div id='contact'>
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
      <Image imgSrc={images['example1.png']} isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example2.png']} widthValue='50%' isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example1.png']} isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example2.png']} widthValue='50%' isSidebarOpened={isSidebarOpened} />
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
