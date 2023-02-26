import React from 'react'
import product_person from '../../assets/product_pers.svg'
import p_works from '../../assets/p_works.svg'
import p_portfolio from '../../assets/p_portfolio.svg'
import p_workflow from '../../assets/p_workflow.svg'
import p_proj_template from '../../assets/p_proj_template.svg'
import p_backlog from '../../assets/p_backlog.svg'
import p_agile from '../../assets/p_agile.svg'
import p_request from '../../assets/p_request.svg'
import p_custom from '../../assets/p_custom.svg'
import t_subtasks from '../../assets/t_subtasks.svg'
import t_tags from '../../assets/t_tags.svg'
import t_taskm from '../../assets/t_taskm.svg'
import t_task_prog from '../../assets/t_task_prog.svg'
import t_task_dep from '../../assets/t_task_dep.svg'
import t_task_assign from '../../assets/t_task_assign.svg'
import t_multiple from '../../assets/t_multiple.svg'
import t_due from '../../assets/t_due.svg'
import tm_track from '../../assets/tm_track.svg'
import tm_sched from '../../assets/tm_sched.svg'
import tm_time from '../../assets/tm_time.svg'
import tm_project from '../../assets/tm_project.svg'
import e_calendar from '../../assets/e_calendar.svg'
import e_personal from '../../assets/e_personal.svg'
import e_organize from '../../assets/e_organize.svg'
import e_task from '../../assets/e_task.svg'
import m_what from '../../assets/m_what.svg'
import m_project from '../../assets/m_project.svg'
import m_priority from '../../assets/m_priority.svg'
import m_past from '../../assets/m_past.svg'
import i_dropbox from '../../assets/i_dropbox.svg'
import i_google from '../../assets/i_google.svg'
import i_slack from '../../assets/i_slack.svg'
import i_task from '../../assets/i_task.svg'
import a_auto from '../../assets/a_auto.svg'
import a_personal from '../../assets/a_personal.svg'
import a_process from '../../assets/a_process.svg'
import a_project from '../../assets/a_project.svg'
import a_tasks from '../../assets/a_tasks.svg'
import a_team from '../../assets/a_team.svg'
import a_time from '../../assets/a_time.svg'
import a_work from '../../assets/a_work.svg'
import ei_csv from '../../assets/ei_csv.svg'
import ei_pdf from '../../assets/ei_pdf.svg'
import ei_desktop from '../../assets/ei_desktop.svg'
import ei_email from '../../assets/ei_email.svg'

import {HStack, VStack, Image, Heading, Text, Button, GridItem, Grid } from '@chakra-ui/react'

const Product = () => {
     const boards = [
         {
            title:'Project Management',
            contents:[
                {subtitle:'Work',
                img: p_works,
                text:'Focus on your work items, plan and track all important tasks with taskgenic’s unique My Work dashboard'          
                },
                {subtitle:'Portfolios',
                img: p_portfolio,
                text:'Organize your projects and tasks into portfolios for quick access and hassle-free project management experience'          
                },
                {subtitle:'Workflow Status',
                img: p_workflow,
                text:"Use unique statuses to fit your project workflows, create your own – or use our built-in selection of statuses."          
                },
                {subtitle:'Project Template',
                img: p_proj_template,
                text:'Save your existing projects as templates with all tasks, events, content, and settings available for easy re-use'          
                },
                {subtitle:'Backlogs',
                img: p_backlog,
                text:'Use taskgenics Backlogs to organize and prioritize user stories and backlog items for your projects and products'          
                },
                {subtitle:'Agile Board',
                img: p_agile,
                text:'Use this advanced Board View to organize and manage tasks for any of your projects'          
                },
                {subtitle:'Request Form',
                img: p_request,
                text:'Create and share custom requests forms to better organize your cross-departmental collaboration and customer experience'          
                },
                {subtitle:'Custom Work Items',
                img: p_custom,
                text:'Create custom project and task types to reflect the real work processes of your organization'          
                },
            ]
         },
         {
            title:'Task Management',
            contents:[
                {subtitle:'Subtasks',
                img: t_subtasks,
                text:'Use subtasks to split your large-scope tasks into smaller items so they can be assigned to multiple users and worked on at the same time'          
                },
                {subtitle:'Tags',
                img: t_tags,
                text:'Create and mark tasks with Tags to better organize your work items and implement workflows'          
                },
                {subtitle:'Task Messages',
                img: t_taskm,
                text:"Collaborate effectively with taskgenics task messages and the Action Required approach"          
                },
                {subtitle:'Task Progress',
                img: t_task_prog,
                text:'Track the progress of your tasks to see the full picture of your project readiness'          
                },
                {subtitle:'Task Dependencies',
                img: t_task_dep,
                text:'Use dependencies to manage tasks relationships and auto-schedule groups of related tasks'          
                },
                {subtitle:'Task Assignments',
                img: t_task_assign,
                text:'Attach any important files and documents to your tasks and share them with the team'          
                },
                {subtitle:'Multiple Assignments',
                img: t_multiple,
                text:'Select multiple users as assignees on the task when more than one user will be responsible for the task’s completion'          
                },
                {subtitle:'Due Date',
                img: t_due,
                text:'Use the tasks’ due dates to set clear goals for your team members and help them plan ahead'          
                }
            ]
         },
         {
            title:'Time Management',
            contents:[
                {subtitle:'Time Tracking',
                img: tm_track,
                text:'Easily track time spent on your work items and generate detailed project and company-level time reports.'          
                },
                {subtitle:'Work Scheduling',
                img: tm_sched,
                text:'Plan your week with the built-in work scheduling tools including Inbox, Today, Calendar, and Someday.'          
                },
                {subtitle:'Timesheet',
                img: tm_time,
                text:"A quick and easy way to enter the time spent on a project during the entire daily and weekly work."          
                },
                {subtitle:'Project Time Report',
                img: tm_project,
                text:'This report will show you a clear picture of the time spent on a particular project along with the estimate, % spent, and more.'          
                }
            ]
         },
         {
            title:'Event Management',
            contents:[
                {subtitle:'Calendar View',
                img: e_calendar,
                text:'View and manage all your events and deadlines in a customizable taskgenic Calendar view'          
                },
                {subtitle:'Personal Event',
                img: e_personal,
                text:'Record and share with the team your out-of-office events, including travel, vacations and more.'          
                },
                {subtitle:'Organization Event',
                img: e_organize,
                text:"Use this shared calendar to create and view all key company events and public holidays."          
                },
                {subtitle:'Task Deadlines',
                img: e_task,
                text:'Task deadlines help plan and track your teams work, as well as review and set work priorities.'          
                }
            ]
         },
         {
            title:'Management Views',
            contents:[
                {subtitle:"What's Done",
                img: m_what,
                text:'Dedicated view to track progress and accomplishments for any period of time.'          
                },
                {subtitle:'Past Dues',
                img: m_past,
                text:'List of all tasks, projects, and milestones that are pastdue or have fallen behind their planned dates.'          
                },
                {subtitle:'Project Portfolio',
                img: m_project,
                text:"Group your projects together to access and manage them from one place."          
                },
                {subtitle:'Priorities',
                img: m_priority,
                text:'Customizable view of work items grouped based on their priority.'          
                }
            ]
         },
         {
            title:'Integrations',
            contents:[
                {subtitle:"Google Drive",
                img: i_google,
                text:'Share files with your team by directly attaching them to tasks from your Google Drive account.'          
                },
                {subtitle:'Dropbox',
                img: i_dropbox,
                text:'Upload and attach files to taskgenics right from your Dropbox.'          
                },
                {subtitle:'Slack',
                img: i_slack,
                text:"Get instant notifications and updates in Slack about what's happening on your projects and tasks in taskgenic."          
                },
                {subtitle:'Task Deadlines',
                img: i_task,
                text:'With taskgenic Gmail plugin, you can create tasks directly from your Gmail account.'          
                }
            ]
         },
         {
            title:'Export/Import & Notifications',
            contents:[
                {subtitle:"Export To CSV",
                img: ei_csv,
                text:'Export all your work items including tasks, projects, events, and reports to CSV/excel formats.'          
                },
                {subtitle:'Export To PDF',
                img: ei_pdf,
                text:'Save any of your views and reports as PDF files'          
                },
                {subtitle:'Email Notifications',
                img: ei_email,
                text:"Customizable email notifications with the instant and delayed (summary) send options"          
                },
                {subtitle:'Desktop Notifications',
                img: ei_desktop,
                text:'If you enable desktop notifications, you will receive updates even if your browser window is not active'          
                }
            ]
         },
         {
            title:'Analytical Reports',
            contents:[
                {subtitle:"Auto Reports",
                img: a_auto,
                text:'Choose the project you want to generate reports for, and the report will be auto-delivered on the specified date/time'          
                },
                {subtitle:'Project Reports',
                img: a_project,
                text:'Project Reports section includes an archive of all project reports that have been generated'          
                },
                {subtitle:'Personal Reports',
                img: a_personal,
                text:"Personal Reports deliver insights on the user’s activity, behavior, collaboration, time reporting, and effort distribution"          
                },
                {subtitle:'Time Reports',
                img: a_time,
                text:'Take a look at the detailed view of the time spent by project or by a user within any period of time'          
                },
                {subtitle:'Process Flows',
                img: a_process,
                text:'Understand how communication flows through your entire organization, within a team, or between individual users'          
                },
                {subtitle:'Team Collaborations',
                img: a_team,
                text:'Find opportunities to improve team dynamics, responsiveness, and collaboration quality with collaboration reports'          
                },
                {subtitle:'Work Progress',
                img: a_work,
                text:'With this report, you can easily review progress for all projects at once for any specified period of time'          
                },
                {subtitle:'Tasks Summary',
                img: a_tasks,
                text:'Get insights on task activity and collaboration on projects across the entire organization or by project and user'          
                }
            ]
         },
     ]
     const renderBoards = boards.map((board, idx)=>
     <VStack key={idx}>
        <Heading mt={'2rem'}>{board.title}</Heading>
        <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)','repeat(4, 1fr)']}>
            {board.contents.map((content,idx)=>
            <GridItem key={idx}>
                <Image src={content?.img}/>
                <VStack pl={'1rem'} alignItems={'flex-start'}>
                    <Text fontSize={['1.2rem']} fontWeight={'bold'}>{content.subtitle}</Text>
                    <Text fontSize={'0.9rem'} w={'90%'}>{content.text}</Text>
                </VStack>
            </GridItem>
            )}
        </Grid>
     </VStack>
     )

  return (
      <>
      
        <HStack p={['1rem','2rem','2rem','3rem']} bgColor={'#E1ECFF'} flexDir={['column-reverse', 'column-reverse', 'row','row']}>
            <VStack w={['90%', '90%','60%', '60%']} alignItems={'flex-start'}>
                <Heading color={' #3C3C3C'}>
                    All Features & Modules
                </Heading>
                <Text fontSize={'0.9rem'} color={'#505050'}>See everything you need to build your perfect workspace in one place and avoid hassle of synchronizing several tools. on taskgenics, you can track, assign tasks, measure productivity, monitor attendance, chat amd much more</Text>
                <VStack>
                    <Button fontSize={'0.8rem'} bgColor={'#003F7D'} color={'#FFFFFF'}>
                        Start Your 14 Day Free Trial
                    </Button>
                    <Text fontSize={'0.7rem'} color={'#FE6E05'}>No Credit Card Required</Text>
                    
                </VStack>
            </VStack>
            <Image w={['90%', '90%','40%', '40%']} src={product_person}/>
        </HStack>
        <VStack p={['1rem','2rem','2rem','3rem']}>
            {renderBoards}
        </VStack>
        <VStack p={['3rem 1rem','3rem 2rem','4rem']} gap={5} bgColor={'#003F7D'}>
            <Heading color={'#FFFFFF'}> Start Your 30-Days Trial</Heading>
            <Text fontSize={['1.2rem']} textAlign={'center'} w={['90%','70%']} color={'#E6E6E6'}>Deliver faster, collaborate better, innovate more effectively — without the high prices and months-long implementation and extensive training required by other products.</Text>
            <Button bgColor={'#FFFFFF'} color={'#003F7D'}>Start For Free</Button>
        </VStack>

      </>
  )
}

export default Product