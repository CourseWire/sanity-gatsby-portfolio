export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2bfaf908fdf6e01c254919',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c25q2tq4',
                  apiId: '0c368c1c-cb35-4368-8ed1-5770c9f66590'
                },
                {
                  buildHookId: '5d2bfaf99eeb0fff3dcb58bd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-opufx84g',
                  apiId: 'bd9972eb-d0a5-4001-9901-a00056ff8745'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CourseWire/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-opufx84g.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
