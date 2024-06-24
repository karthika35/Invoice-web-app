package com.exam.orm.service;

import com.exam.orm.repository.InvoiceRepository;
import com.exam.orm.entity.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class InvoiceService {
    @Autowired
    public InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice) {
        invoiceRepository.save(invoice);
        return invoice;
    }

    public Invoice getInvoiceById(int itemId) {
        return invoiceRepository.findById(itemId).orElse(null);
    }

    public List<Invoice> getAllInvoice() {
        return invoiceRepository.findAll();
    }

    public Invoice updateInvoice(int itemId, Invoice newInvoice) {
        return invoiceRepository.findById(itemId).map(invoice -> {
            invoice.setInvoiceNo(newInvoice.getInvoiceNo());
            invoice.setInvoiceDate(newInvoice.getInvoiceDate());
            invoice.setEmailAddress(newInvoice.getEmailAddress());
            invoice.setCustomer(newInvoice.getCustomer());
            invoice.setAmount(newInvoice.getAmount());
            invoice.setStatus(newInvoice.getStatus());
            invoice.setInvoiceDate(newInvoice.getInvoiceDate());
            return invoiceRepository.save(invoice);
        }).orElseGet(null);
    }

    public Invoice deleteInvoice(int itemId) {
        Invoice invoice = getInvoiceById(itemId);
        if (invoice != null) {
            invoiceRepository.delete(invoice);
            return invoice;
        } else return null;

    }

    public void deleteAll() {
        invoiceRepository.deleteAll();
    }
}
