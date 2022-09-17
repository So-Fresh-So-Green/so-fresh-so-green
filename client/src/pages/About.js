import React from "react";

export default function About() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {" "}
            The So Fresh So Green Team is collation of developers with the a
            love all things fresh. Any questions? Check us out below!{" "}
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://avatars.githubusercontent.com/u/100809744?v=4"
              ></img>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Alex Olsavsky
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  Alex is an arts nonprofit executive and professional vocalist
                  turned Full Stack Web Developer. She leaves no stone unturned
                  when presented with a challenging problem and brings a
                  creative and passionate vitality to every space she inhabits.
                </p>
                <span class="inline-flex">
                  <span class="inline-flex">
                    <a
                      class="text-gray-500"
                      href="https://www.linkedin.com/in/alexandra-olsavsky/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a
                      class="ml-2 text-gray-500"
                      href="https://github.com/ajolsavsky"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="data:image/jpeg;base64,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"
              ></img>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Givens{" "}
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  Givens is an experiential designer and developer armed with a
                  BA in Fine Arts from St. Mary's College currently completing
                  and is on the precipice of completing a Full-Stack development
                  course at Northwestern University. They create interactive and
                  immersive experiences that consist of experimental light /
                  architectural design, audio visual art, 3D animation, and
                  augmented reality development, in addition to music
                  composition and artistic direction.
                </p>
                <span class="inline-flex">
                  <a
                    class="text-gray-500"
                    href="https://www.linkedin.com/in/giiivens/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/GIIIVENS"
                    class="ml-2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>

                  <a href="https://giiivens.com/" class="ml-2 text-gray-500">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
                    </svg>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://sfsg-upload.s3.us-east-2.amazonaws.com/headshot.jpg"
              ></img>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Ian Sieg
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  Ian is a web developer from Seattle, with a BA in cultural
                  anthropology and a background in graphic design. He is
                  currently finishing up a fullstack web development program at
                  Northwestern University.
                </p>
                <span class="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/ian-sieg-670675212/"
                    class="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/ian-sieg"
                    class="ml-2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://pbs.twimg.com/media/FcvLoJbWIAI0wG1?format=jpg&name=medium"
              ></img>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Elia Martinez
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  Elia is from Chicago and currently finishing a full stack
                  coding course at Northwestern University.
                </p>
                <span class="inline-flex">
                  <a href="https://www.linkedin.com/in/elia-martinez-996070208/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/EliaMart"
                    class="ml-2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://pbs.twimg.com/media/Fcu_ZppWYAcREEs?format=jpg&name=large"
              ></img>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Kaluki Musau
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  {" "}
                  Kaluki Musau is a web developer from Chicago, Illinois. Before
                  taking the Full-Stack course and from NorthWestern University,
                  I was working in the Social Services sector. I previously
                  graduated from the University of Illinois at Chicago with a
                  degree in Psychology.
                </p>
                <span class="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/kaluki-musau/"
                    class="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/kkmusau"
                    class="ml-2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
