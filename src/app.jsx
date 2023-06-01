import React from 'react';
//import ReactDOM from 'react-dom';

export default function App() {
  return (
    <div>
      <div id='layout' className='pure-g'>
        <div className='sidebar pure-u-1 pure-u-md-1-4'>
          <div className='header'>
            <h1 className='brand-title'>Lee S Jensen</h1>
            <h2 className='brand-tagline'>Just something about the name Lee</h2>
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
          <div className='hero-img'>
            <img className='pure-img' src='windrivers2022.jpg' />
          </div>
          <div className='welcome'>
            <p>I hope you find what you are looking for. In the meantime checkout some of the stuff here.</p>
          </div>

          <div className='posts'>
            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Learning 4.0</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='learning/manifesto.html'>A New Dawn of Learning</a>
                  </li>
                  <li>
                    <a href='https://docs.google.com/presentation/d/1x6Sa2y6PDXJcRRCIi7Dt2jTmtaX1B5WXGP7tF1xog7k/edit?usp=share_link'>
                      Learning in the Globally Connected World
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Teaching</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://winter2022.cs260.click/'>Winter 2022 - CS 260</a>
                  </li>
                  <li>
                    <a href='https://github.com/webprogramming260'>Winter 2023 - CS 260</a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Programmerish things</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://babelstone.co.uk/Unicode/unicode.html'>Unicode slideshow</a>
                  </li>

                  <li>
                    <a href='https://uxdesign.cc/the-age-of-agile-must-end-bc89c0f084b7'>The age of Agile must end</a>
                  </li>
                  <li>
                    <a href='https://thenewstack.io/our-2023-site-reliability-engineering-wish-list/'>
                      2023 Site Reliability Engineering Wish List
                    </a>
                  </li>
                  <li>
                    <a href='https://requestmetrics.com/web-performance/http3-is-fast'>HTTP/3 performance</a>
                  </li>
                  <li>
                    <a href='https://levelup.gitconnected.com/10-awesome-github-repos-every-developer-must-know-c0b0839a17d3'>
                      Repos every developer should know
                    </a>
                  </li>
                  <li>
                    <a href='https://12factor.net/'>The 12-Factor App</a>
                  </li>
                  <li>
                    <a href='https://insights.stackoverflow.com/survey/2021'>Stack Overflow 2021 survey</a>
                  </li>
                  <li>
                    <a href='https://stateofcss.com'>State of CSS</a>
                    <span className='post-category post-category-css'>CSS</span>
                  </li>
                  <li>
                    <a href='https://stateofjs.com'>State of JS</a>
                    <span className='post-category post-category-js'>JS</span>
                  </li>
                  <li>
                    <a href='https://arxiv.org/abs/2103.07487'>How developers choose names</a>
                  </li>
                  <li>
                    <a href='https://devops.com/7-popular-open-source-ci-cd-tools/'>
                      7 Popular open source CI/CD tools
                    </a>
                  </li>
                  <li>
                    <a href='https://click.linksynergy.com/deeplink?id=kXQk6%2AivFEQ&mid=46128&u1=trd-us-2061085037600953600&murl=https%3A%2F%2Fwww.microsoft.com%2Fen-gb%2Fsoftware-download%2Fwindows10'>
                      Windows 10 media creation tool
                    </a>
                  </li>
                  <li>
                    <a href='https://ahoyo.to/lee'>Single page websites</a>
                  </li>
                  <li>
                    <a href='https://anthonynsimon.com/blog/one-man-saas-architecture/'>
                      Stack behind a one person startup
                    </a>
                  </li>
                  <li>
                    <a href='https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF'>Color scheme designer</a>
                  </li>
                  <li>
                    <a href='https://regex101.com/'>Regex 101</a>
                  </li>
                  <li>
                    <a href='https://www.freecodecamp.org/'>freeCodeCamp</a> -
                    <a href='https://www.freecodecamp.org/news/freecodecamp-math-computer-science-degree-update'>
                      BS in CS
                    </a>
                  </li>
                  <li>
                    <a href='https://research.google/pubs/pub334/'>Original Google paper</a>
                  </li>
                  <li>
                    <a href='https://ogp.me/'>Open Graph protocol</a>
                  </li>
                  <li>
                    <a href='https://commoncrawl.org/'>Common Crawl</a>
                  </li>
                  <li>
                    <a href='https://refactoring.guru/smells/feature-envy'>Refactoring</a>
                  </li>
                  <li>
                    <a href='https://www.techrepublic.com/article/the-way-we-teach-coding-is-all-wrong-heres-how-it-needs-to-change/'>
                      We teach coding wrong
                    </a>
                  </li>
                  <li>
                    <a href='https://gist.github.com/nckroy/dd2d4dfc86f7d13045ad715377b6a48f'>Eran Hammer on OAuth2</a>
                  </li>
                  <li>
                    <a href='https://github.com/doctorray117/minecraft-ondemand'>
                      Hosting a minecraft server on AWS for almost nothing
                    </a>
                  </li>
                  <li>
                    <a href='https://refspecs.linuxfoundation.org/FHS_2.3/fhs-2.3.html'>
                      Standard Linux filesystem structure
                    </a>
                  </li>
                  <li>
                    <a href='https://api.congress.gov/'>Congress API</a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Interesting stuff</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://www.cold-takes.com/the-gloves-are-off-the-pants-are-on/'>When stats go wrong</a>
                  </li>
                  <li>
                    <a href='https://fs.blog/stop-reading-news/'>Why you should stop reading news</a>
                  </li>
                  <li>
                    <a href='https://perell.com/essay/how-learning-happens/'>How Learning Happens</a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Blogs</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/@CodingWithJohn/videos'>Coding with John</a>
                    <span className='post-category post-category-js'>Java</span>
                  </li>

                  <li>
                    <a href='https://apisyouwonthate.com/blog'>APIs you won't hate</a>
                  </li>
                  <li>
                    <a href='https://2ality.com/'>2ality</a>
                    <span className='post-category post-category-js'>JS</span>
                  </li>
                  <li>
                    <a href='http://raganwald.com/'>Reginald Braithwaite</a>
                    <span className='post-category post-category-js'>JS</span>
                  </li>
                  <li>
                    <a href='https://medium.com/@addyosmani'>Addy Osmani</a>
                    <span className='post-category post-category-performance'>Performance</span>
                    <span className='post-category post-category-pwa'>PWA</span>
                  </li>
                  <li>
                    <a href='https://ponyfoo.com/'>Phony Foo</a>
                    <span className='post-category post-category-js'>JS</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Podcasts</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://rpb3r.app.goo.gl/3zxy'>How I Built This</a>
                  </li>
                  <li>
                    <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL21hc3RlcnMtb2Ytc2NhbGU?sa=X&ved=0CAMQ4aUDahcKEwjwy7Dnu8fvAhUAAAAAHQAAAAAQAQ&hl=en-GH'>
                      The Masters of Scale
                    </a>
                  </li>
                  <li>
                    <a href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5wYWNpZmljLWNvbnRlbnQuY29tL2NvbW1hbmRsaW5laGVyb2Vz'>
                      Command Line Heroes
                    </a>
                  </li>
                  <li>
                    <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9YQV84NTFrMw=='>
                      The Stack Overflow
                    </a>
                  </li>
                  <li>
                    <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjIxNTc0MDQ1MC9zb3VuZHMucnNz'>
                      InfoQ
                    </a>
                  </li>
                  <li>
                    <a href='https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc2VpLmNtdS5lZHUvcG9kY2FzdHMvZmlsZXNfcG9kY2FzdHMvaXR1bmVzRmVlZC54bWw=?nord=0'>
                      Software Engineering Radio
                    </a>
                  </li>
                  <li>
                    <a href='https://podcasts.apple.com/gh/podcast/full-stack-radio/id931714873'>Full Stack Radio</a>
                  </li>
                  <li>
                    <a href='https://perell.com/essay/against-3x-speed/'>Against 3X Speed</a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>Playing around</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='mazejs/maze.html'>Maze-JS</a>
                  </li>
                  <li>
                    <a href='cuidado/index.html'>¡Cuidado!</a>
                  </li>
                </ul>
              </div>
            </section>

            <section className='post'>
              <header className='post-header'>
                <h2 className='post-title'>React</h2>
              </header>
              <div className='post=description'>
                <ul>
                  <li>
                    <a href='https://www.taniarascia.com/getting-started-with-react/'>Tania - Basic React Tutorial</a>
                  </li>
                  <li>
                    <a href='https://jscomplete.com/reactful'>
                      Buna - Set up React environment without create-react-app
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
