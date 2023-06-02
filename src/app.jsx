import React from 'react';
import './app.css';
import data from './data.json';

export default function App() {
  const sections = [];
  for (let section of data) {
    const entries = [];
    for (let entry of section.entries) {
      const tags = [];

      for (let i in entry.tags) {
        const tag = entry.tags[i];
        tags.push(
          <span key={i} className={'post-category post-category-' + tag.toLowerCase()}>
            {tag}
          </span>
        );
      }

      entries.push(
        <li key={entry.title}>
          <a href={entry.link}>{entry.title}</a>
          {tags}
        </li>
      );
    }

    sections.push(
      <section key={section.name} className='post'>
        <header className='post-header'>
          <h2 className='post-title'>{section.name}</h2>
        </header>
        <div className='post=description'>
          <ul>{entries}</ul>
        </div>
      </section>
    );
  }

  return (
    <main>
      <div id='layout' className='pure-g'>
        <div className='sidebar pure-u-1 pure-u-md-1-4'>
          <div className='header'>
            <h1 className='brand-title'>Lee S Jensen</h1>
            <h2 className='brand-tagline'>Associate Professor</h2>
            <nav className='nav'>
              <ul className='nav-list'>
                <li className='nav-item'>
                  <a href='https://www.linkedin.com/in/leesjensen/' className='pure-button'>
                    LinkedIn
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='https://github.com/leesjensen' className='pure-button'>
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='content pure-u-1 pure-u-md-3-4'>
          <div className='posts'>{sections}</div>
        </div>
      </div>
    </main>
  );
}
