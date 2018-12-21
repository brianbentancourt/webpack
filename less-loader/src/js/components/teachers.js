import React, { Component} from 'react';
import Teacher from './teacher.js';
import '../../css/main.less';

class Teachers extends Component{
    render(){
        return(
            <div>
                <ul className='Teachers'>
                {this.props.data.teachers.map(teacherData =>{
                    return <Teacher key={teacherData.twitter} {...teacherData} />
                })}
                    
                </ul>
            </div>
        )
    }
}

export default Teachers;