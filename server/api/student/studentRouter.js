const studentRouter = require('express').Router()
const student_ctrl = require('./student_ctrl')

studentRouter.get('/all', student_ctrl.getAllStudents)
studentRouter.get('/getByCourseId/:courseId', student_ctrl.getGraduatesByCourseId)

studentRouter.post('/many', student_ctrl.getManyStudents)
studentRouter.post('/single', student_ctrl.getStudent)
studentRouter.put('/student/:Id', student_ctrl.updateStudentById)
studentRouter.delete('/student/:Id', student_ctrl.deleteStudentByUrlId)
studentRouter.get('/student/:Id', student_ctrl.getStudentByUrlId)
module.exports = studentRouter;


/**
 * @swagger
 * components:
 *      schemas:
 *          Student:
 *              type: object
 *              required:
 *                  - phone
 *                  - email
 *                  - password
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The auto generated id of the student
 *                  phone: 
 *                      type: string              
 *                      description: The student phone number        
 *                  email: 
 *                      type: string              
 *                      description: The student email        
 *                  firstName:
 *                      type: string
 *                      description: The student first name
 *                  lastName: 
 *                      type: string              
 *                      description: The student last name  
 *                  dateOfBirth: 
 *                      type: string              
 *                      description: The student date of birth   
 *                  country: 
 *                      type: string              
 *                      description: The student country name       
 *                  city: 
 *                      type: string              
 *                      description: The student city name       
 *                  street:
 *                      type: string
 *                      description: The student street name
 *                  specialty: 
 *                      type: string              
 *                      description: The student specialty   
 *                  isWorking: 
 *                      type: boolean              
 *                      description: Does the student work?       
 *                  workCompany:
 *                      type: string
 *                      description: If the student does work, what the company name
 *                  linkedInLink: 
 *                      type: string              
 *                      description: The student linkedIn link 
 *                  githubLink: 
 *                      type: string              
 *                      description: The student github link  
 *                  personalWebLink: 
 *                      type: string              
 *                      description: The student personal web link  
 *                  token: 
 *                      type: string              
 *                      description: The student token  
 *                  isAuth: 
 *                      type: boolean              
 *                      description: The student authorization status (false by default) 
 *                  section: 
 *                      type: String              
 *                      description: The student section  
 *                  date:       
 *                      type: Date              
 *                      description: The student register date  
 *                  projects: 
 *                      type: array         
 *                      items:              
 *                               properties:          
 *                                   projectName:          
 *                                      type: string
 *                                      description: The student project name
 *                                   aboutIt:          
 *                                      type: string          
 *                                      description: About the student project
 *                      description: The student Project                 
 *                  picture: 
 *                      type: array         
 *                      items:              
 *                               properties:          
 *                                   _id:          
 *                                      type: string
 *                                      description: The picture id
 *                                   data:          
 *                                      type: buffer          
 *                                      description: The picture data buffer
 *                                   name:          
 *                                      type: string
 *                                      description: The picture name
 *                                   contentType:          
 *                                      type: string          
 *                                      description: The picture content type
 *                                   size:          
 *                                      type: Number
 *                                      description: The size number
 *                                   path:          
 *                                      type: string          
 *                                      description: The picture path
 *                      description: The student picture
 *              example: 
 *                  _id: 60a76892a58dd86f68596b39 
 *                  phone: 054-3173953 
 *                  email: test@gmail.com 
 *                  password: $2a$10$Nl7.zzztvnV4ZRPgMeF1kORZlKTrp3YVwaE2Uu79cfoZBidWuhXzK 
 *                  firstName: Lior 
 *                  lastName: Mazig 
 *                  dateOfBirth: 18-04-1995 
 *                  country: Israel 
 *                  city: Lod 
 *                  street: ben guryon 21                 
 *                  specialty: Full-Stack Developer                 
 *                  isWorking: false                 
 *                  workCompany: not working                
 *                  linkedInLink: https://www.linkedin.com/in/lior-mazig                 
 *                  githubLink: https://github.com/liori142                 
 *                  personalWebLink: https://liori142.github.io/Protfolio                
 *                  token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYThjYzdjYzI4OTJkNGNhZjdiMmQ3NCIsImVtYWlsIjoidGVzdDNAZ21haWwuY29tIiwiaWF0IjoxNjIxNjc1NjIzLCJleHAiOjE2NTMyMzI1NDl9.mXeOBbpggtDaCjpK8g3n4ns7dEERBCAyMoTm6AJ6JIo                
 *                  section: Full stack developer, tech career 20-21                 
 *                  date: 2021-05-21T07:53:49.875Z 
 * 
 *              
 * @swagger
 *  tags:
 *      name: Students
 *      description: The Students managing API      
 * 
 * @swagger
 *   /students/all:
 *      get:
 *      parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema: 
 *              type: array
 *              items:
 *                  $ref:'#/components/schemas/Student'
 *         description: The user ID                    
 */