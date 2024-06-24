package com.exam.orm.controller;

import com.exam.orm.entity.Invoice;
import com.exam.orm.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;

    @RequestMapping(method = RequestMethod.POST, value = "/app/invoice", consumes = "application/json")
    ResponseEntity<Invoice> addInvoice(@RequestBody Invoice invoice) {
        return new ResponseEntity<Invoice>(invoiceService.saveInvoice(invoice), HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.PUT, value = "/app/invoice/{invoiceId}", consumes = "application/json")
    ResponseEntity<Invoice> replaceInvoice(@PathVariable("invoiceId") int itemId, @RequestBody Invoice newInvoice) {

        Invoice invoice = invoiceService.getInvoiceById(itemId);
        if (invoice == null) {
            return new ResponseEntity<Invoice>(new Invoice(), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Invoice>(invoiceService.updateInvoice(itemId, newInvoice),HttpStatus.OK);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/app/invoice/{invoiceId}", produces = "application/json")
    ResponseEntity<Invoice> deleteInvoice(@PathVariable("invoiceId") int itemId) {

        Invoice invoice = invoiceService.getInvoiceById(itemId);
        if (invoice == null) {
            return new ResponseEntity<Invoice>(new Invoice(), HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<Invoice>(invoiceService.deleteInvoice(itemId), HttpStatus.OK);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/app/invoice", produces = "application/json")
    ResponseEntity deleteAllInvoice() {
        invoiceService.deleteAll();
        return new ResponseEntity(HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.GET, value = "/app/invoice/{contactId}", produces = "application/json")
    ResponseEntity<Invoice> getInvoice(@PathVariable("contactId") int itemId) {
        Invoice invoice = invoiceService.getInvoiceById(itemId);
        if (invoice == null) {
            return new ResponseEntity<Invoice>(new Invoice(), HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
        }
    }


    @RequestMapping(method = RequestMethod.GET, value = "/app/invoice", produces = "application/json")
    ResponseEntity<List<Invoice>> getAllInvoice() {
        List<Invoice> invoice = invoiceService.getAllInvoice();
        List<Invoice> emptyList = new ArrayList<>();

        if (invoice != null) {
            return new ResponseEntity<List<Invoice>>(invoice, HttpStatus.OK);
        }else {
            return new ResponseEntity<List<Invoice>>( emptyList, HttpStatus.BAD_REQUEST);
        }
    }


}
