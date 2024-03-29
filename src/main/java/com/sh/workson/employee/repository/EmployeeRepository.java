package com.sh.workson.employee.repository;

import com.sh.workson.employee.dto.EmployeeChatDto;
import com.sh.workson.employee.dto.IApprover;
import com.sh.workson.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * <객체타입, ID타입>
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    /**
     * email로 로그인 시, 권한 정보도 저장할 수 있어야한다.
     */
    @Query("from Employee e join fetch e.authorities join fetch e.department join fetch e.position where e.email = :email")
    Employee findByEmail(@Param("email") String email);


    /**
     * 민정
     */
    @Query("from Employee e join fetch e.authorities join fetch e.department join fetch e.position where e.id = :id")
    Optional<Employee> findById(@Param("id") Long id);

    @Query("from Employee e left join fetch e.department left join fetch e.position where e.name like '%' || :name || '%'")
    List<Employee> findByName(@Param("name") String name);


    /**
     * 재준
     */
    @Query("select name from Employee where id = :employeeId")
    String findNameByEmpId(@Param("employeeId") Long employeeId);

    @Query("select profileUrl from Employee where id = :employeeId")
    String findProfileUrlByEmpId(@Param("employeeId") Long employeeId);

    @Query("from Employee e where e.email = :email")
    Employee checkEmailDuplicate(@Param("email")String email);



    /**
     * 우진
     */
    @Query(value = """
    select
    	e.id
    	, e.name as empName
    	, d.name as deptName
        , p.name as positionName
    from
    	employee e join department d
    		on e.dept_id = d.id
        join position p
            on e.position_id = p.id
    where
    	e.id not in :id
""", nativeQuery = true)
    List<IApprover> findApprover(@Param("id") Long id);


    @Query("from Employee e left join fetch e.department left join fetch e.position where e.id = :id")
    Employee findLoginUser(@Param("id") Long id);




    /**
     * 민준
     */







    /**
     * 준희
     */









    /**
     * 무진
     */










}
