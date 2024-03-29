package com.sh.workson.chat.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatLogCreateDto {
    private String content;
    private Long employeeId;
    private Long chatRoomId;
}
