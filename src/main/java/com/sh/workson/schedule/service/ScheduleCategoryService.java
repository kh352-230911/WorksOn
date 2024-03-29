package com.sh.workson.schedule.service;

import com.sh.workson.auth.vo.EmployeeDetails;
import com.sh.workson.employee.entity.Employee;
import com.sh.workson.schedule.dto.CreateScheduleCategoryDto;
import com.sh.workson.schedule.dto.ScheduleCategoryDto;
import com.sh.workson.schedule.dto.UpdateScheduleCategoryDto;
import com.sh.workson.schedule.entity.ScheduleCategory;
import com.sh.workson.schedule.repository.ScheduleCategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
public class ScheduleCategoryService {
    @Autowired
    private ScheduleCategoryRepository scheduleCategoryRepository;
    @Autowired
    private ModelMapper modelMapper;

    public List<ScheduleCategoryDto> findByEmpId(EmployeeDetails employeeDetails) {
        Employee employee = employeeDetails.getEmployee();
        List<ScheduleCategory> scheduleCategories = scheduleCategoryRepository.findByEmpId(employee.getId());
        List<ScheduleCategoryDto> scheduleCategoryDtos = scheduleCategories.stream()
                            .map(this::convertToScheduleCategoryDto)
                            .collect(Collectors.toList());
            return scheduleCategoryDtos;
    }

    private ScheduleCategoryDto convertToScheduleCategoryDto(ScheduleCategory scheduleCategory) {
        ScheduleCategoryDto scheduleCategoryDto = modelMapper.map(scheduleCategory, ScheduleCategoryDto.class);
        return scheduleCategoryDto;
    }

    public void createScheduleCategory(CreateScheduleCategoryDto createScheduleCategoryDto) {
        ScheduleCategory scheduleCategory = scheduleCategoryRepository.save(convertToScheduleCategory(createScheduleCategoryDto));
    }
    private ScheduleCategory convertToScheduleCategory(CreateScheduleCategoryDto createScheduleCategoryDto){
        ScheduleCategory scheduleCategory = modelMapper.map(createScheduleCategoryDto, ScheduleCategory.class);
        scheduleCategory.setEmployee(Employee.builder()
                        .id(createScheduleCategoryDto.getEmpId())
                        .build());
        scheduleCategory.setName(createScheduleCategoryDto.getName());
        scheduleCategory.setColor(createScheduleCategoryDto.getColor());
        return scheduleCategory;
    }


    public void deleteById(Long id) {
        scheduleCategoryRepository.deleteById(id);
    }

    public void updateScheduleCategory(UpdateScheduleCategoryDto updateScheduleCategoryDto) {
        scheduleCategoryRepository.save(convertUpdateSCToSC(updateScheduleCategoryDto));
    }
    private ScheduleCategory convertUpdateSCToSC(UpdateScheduleCategoryDto updateScheduleCategoryDto){
        ScheduleCategory scheduleCategory = modelMapper.map(updateScheduleCategoryDto, ScheduleCategory.class);
        scheduleCategory.setEmployee(Employee.builder()
                .id(updateScheduleCategoryDto.getEmpId())
                .build());
        return  scheduleCategory;

    }
}
