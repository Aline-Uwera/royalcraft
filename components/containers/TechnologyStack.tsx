import React from 'react'

const technologies = {
  'Programming Languages': [
    { icon: '/java.svg', name: 'Java' },
    { icon: '/python.svg', name: 'Python' },
    { icon: '/ruby.svg', name: 'Ruby' },
    { icon: '/php.svg', name: 'PHP' },
  ],
  frameworks: [
    { icon: '/react.svg', name: 'React.js' },
    { icon: '/angular.svg', name: 'Angular.js' },
    { icon: '/vue.svg', name: 'Vue.js' },
    { icon: '/next.svg', name: 'Next.js' },
    { icon: '/django.svg', name: 'Django' },
    { icon: '/spring-boot.svg', name: 'Spring Boot' },
    { icon: '/ruby-on-rails.svg', name: 'Ruby on Rails' },
    { icon: '/laravel.svg', name: 'Laravel' },
    { icon: '/node.svg', name: 'Node.js' },
  ],
  databases: [
    { icon: '/mysql.svg', name: 'MySQL' },
    { icon: '/mongodb.svg', name: 'MongoDB' },
    { icon: '/postgresql.svg', name: 'PostgreSQL' },
    { icon: '/mssql.svg', name: 'Microsoft SQL Server' },
  ],
  devOps: [
    { icon: '/docker.svg', name: 'Docker' },
    { icon: '/kubernetes.svg', name: 'Kubernetes' },
    { icon: '/aws-dev-tools.svg', name: 'AWS Developer Tools' },
    { icon: '/jenkins.svg', name: 'Jenkins' },
    { icon: '/azure-devops.svg', name: 'Azure DevOps' },
    { icon: '/google-dev-tools.svg', name: 'Google Developer Tools' },
    { icon: '/datadog.svg', name: 'Datadog' },
    { icon: '/grafana.svg', name: 'Grafana' },
    { icon: '/elastic-search.svg', name: 'Elastic Search' },
  ],
  'Cloud Platforms': [
    { icon: '/AWS.svg', name: 'AWS' },
    { icon: '/azure.svg', name: 'Azure' },
    { icon: '/google-cloud.svg', name: 'Google Cloud' },
  ],
  'Version Control': [
    { icon: '/git.svg', name: 'Git' },
    { icon: '/svn.svg', name: 'SVN' },
  ],
  IDEs: [
    { icon: '/visual-studio-code.svg', name: 'Visual Studio Code' },
    { icon: '/IntelliJ-IDEA.svg', name: 'IntelliJ IDEA' },
    { icon: '/pycharm.svg', name: 'PyCharm' },
  ],
  'Testing Frameworks': [
    { icon: '/jest.svg', name: 'Jest' },
    { icon: '/selenium.svg', name: 'Selenium' },
    { icon: '/junit.svg', name: 'JUnit' },
    { icon: '/mocha.svg', name: 'Mocha' },
  ],
}

const TechnologyStack: React.FC = () => {
  return (
    <div className="bg-[#f6f8fb]">
      <div className=" pt-20 pb-[50px] 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4 ">
        <div>
          <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
            <span className="text-[20px] font-light">SOFTWARE DEVELOPMENT</span>
            Technology Stack
          </h2>
        </div>
        {Object.entries(technologies).map(([category, items], index, array) => (
          <div
            key={category}
            className={`mb-8 flex pb-4 ${
              index === array.length - 1 ? '' : 'border-b border-b-[#e7e7e7]'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4 capitalize px-4 flex-grow-0 flex-shrink-0 w-[16.666667%] max-w-[16.666667%]">
              {category}
            </h2>
            <div className=" px-4 flex-grow-0 flex-shrink-0 w-[83.333333%] max-w-[83.333333%] ">
              <ul className="flex flex-wrap">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="bg-white rounded-[30px] px-4 py-0 h-[40px] mx-[5px] mb-[15px] text-base flex items-center shadow-sm"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-5 w-5 mr-2"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologyStack
