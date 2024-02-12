package com.sh.workson.project.dto;

import com.sh.workson.employee.dto.EmployeeDetailDto;
import com.sh.workson.employee.dto.EmployeeSearchDto;
import com.sh.workson.project.entity.ProjectEmployee;
import com.sh.workson.project.entity.Status;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProjectDetailDto {
    private Long id;
    private String title;
    private LocalDate startAt;
    private LocalDate endAt;
    private Status status;
    private EmployeeDetailDto employee;


//    private List<EmployeeDetailDto> projectEmployees = new ArrayList<>();

}