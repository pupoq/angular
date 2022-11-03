import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  filteredStudents!: Student[]
  _filterText = ''
  constructor() { }

  ngOnInit(){
    this.filteredStudents = this.students
  }

  students: Student[] = [
    {name: 'Mark Alexander', course: 'MBA', marks: 0.52, DOB: new Date('11-12-1997'), gender: 'Male'},
    {name: 'Marko Polo', course: 'BS', marks: 1, DOB: new Date('01-09-1970'), gender: 'Male'},
    {name: 'Ilon Mask', course: 'BA', marks: 0.86, DOB: new Date('11-01-1965'), gender: 'Male'},
    {name: 'Will Smith', course: 'BA', marks: 0.99, DOB: new Date('04-06-1968'), gender: 'Male'},
    {name: 'Sarah Smith', course: 'MFlield', marks: 0.11, DOB: new Date('05-02-1994'), gender: 'Female'},
    {name: 'Mery Jane', course: 'BS', marks: 0.24, DOB: new Date('01-01-2001'), gender: 'Female'},
    {name: 'John Harvard', course: 'BA', marks: 0.64, DOB: new Date('12-12-1999'), gender: 'Male'},
  ]

  set filterText(value: string){
    this._filterText = value
    this.filteredStudents = this.filterStudentsByName(value)
  }

  get filterText() {
    return this._filterText
  }

  filterStudentsByName(filterTerm: string){
    if(this.students.length === 0 || this.filterText === ''){
      return this.students
    } else {
      return this.students.filter((student) => {
        return student.name?.toLowerCase() === filterTerm.toLowerCase()
      })
    }
  }
}
