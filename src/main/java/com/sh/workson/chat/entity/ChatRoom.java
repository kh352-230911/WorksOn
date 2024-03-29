package com.sh.workson.chat.entity;

import com.sh.workson.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chat_room")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "seq_chat_room_id_generator")
    @SequenceGenerator(name = "seq_chat_room_id_generator", sequenceName = "seq_chat_room_id", initialValue = 1, allocationSize = 50)
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "chat_emp",
            joinColumns = @JoinColumn(name = "chat_room_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    @Builder.Default
    private List<Employee> chatEmps = new ArrayList<>();

    public void addChatEmps(Employee employee) {
        this.chatEmps.add(employee);
    }
}

