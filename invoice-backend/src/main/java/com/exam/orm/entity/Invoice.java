package com.exam.orm.entity;

import lombok.Data;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invoiceId;
    private int invoiceNo;
    private String customer;
    private String emailAddress;
    private String invoiceDate;
    private double amount;
    private String status;

    public Invoice() {
    }

    public Invoice(int invoiceId, int invoiceNo, String customer, String emailAddress, String invoiceDate, double amount, String status) {
        this.invoiceId = invoiceId;
        this.invoiceNo = invoiceNo;
        this.customer = customer;
        this.emailAddress = emailAddress;
        this.invoiceDate = invoiceDate;
        this.amount = amount;
        this.status = status;
    }
}
