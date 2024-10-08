package com.piseth.java.school.phoneshopenight.service;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.piseth.java.school.phoneshopenight.entity.Brand;
import com.piseth.java.school.phoneshopenight.exception.ResourceNotFoundException;
import com.piseth.java.school.phoneshopenight.repository.BrandRepository;
import com.piseth.java.school.phoneshopenight.service.impl.BrandServiceImpl;

@ExtendWith(MockitoExtension.class)
public class BrandServiceTest {
	
	@Mock
	private BrandRepository brandRepository;
	
	@Captor
	private ArgumentCaptor<Brand> brandCaptor;
	
//	@Autowired
	// this below is call Polimolishim and we can not use Autowired in Testing 
	private BrandService brandService;
	
	@BeforeEach
	public void setUp() {
		brandService = new BrandServiceImpl(brandRepository);
	}	
	
	/*
	 
	@Test
	public void testCreate() {
		
		//Given
		
		Brand brand = new Brand();
		brand.setId(1);
		brand.setName("Apple");
		
		// When
		
		when(brandRepository.save(any(Brand.class))).thenReturn(brand);
		Brand brandReturn = brandService.create(new Brand());
		
		// then 
		
		assertEquals(1, brandReturn.getId());
		assertEquals("Apple", brandReturn.getName());		
		
	}
	 */
	
	// test with save method : we want to verify this method was called 
	
	@Test
	public void testCreate() {
		
		// given 
		
		Brand brand = new Brand();
		brand.setName("Apple");
		
		// when		
		brandService.create(brand);		
		// then 		
		verify(brandRepository, times(1)).save(brand); // To verify it want called one time 
		//brandRepository.save(brand);
	}
	
	@Test
	public void testgetByIdSuccess() {
		
		//Given
		
		Brand brand = new Brand();
		brand.setId((long) 1);
		brand.setName("Apple");
		
		
		// When
		// 1 Mock
		when(brandRepository.findById(1L)).thenReturn(Optional.of(brand));
		 
		// 2 call our service to test		
		Brand returnBrand = brandService.getById(1L);
		
		
		//then
		assertEquals(1, returnBrand.getId());
		assertEquals("Apple", returnBrand.getName());
		
		
	}	
	
	@Test
	public void testgetByIdFail() {
		when(brandRepository.findById(2L)).thenReturn(Optional.empty()); // to make the Expection Call Method in our class
		
		// Call our method to test
		
		assertThatThrownBy(() -> brandService.getById(2L))
			.isInstanceOf(ResourceNotFoundException.class)
			.hasMessage(String.format("%s With id = %d not found","Brand", 2 ));
//			.hasMessageEndingWith("not found");
	}
	
	@Test
	public void testUpdate() {
		
		//Given
		
		Brand brandInDB = new Brand(1L, "Apple");
		Brand brand = new Brand(1L, "Apple 2");
		
		// we want to knonw in the db: brand(1,"Apple")
		
		//when 
		when(brandRepository.findById(1L)).thenReturn(Optional.ofNullable(brandInDB));
		//when(brandRepository.save(any(Brand.class))).thenReturn(brand); // option one to fix null pointer in save method 
		Brand brandAfterUpdate = brandService.update(1L, brand);		
		
		//then 
		verify(brandRepository, times(1)).findById(1L);
		//assertEquals("Apple 2", brandAfterUpdate.getName());		
		
		// this point it will error with null pointer cause the save method it don't know what to save 
		// the recoment we use Argument capture 
				
		verify(brandRepository).save(brandCaptor.capture());
		assertEquals("Vibol", brandCaptor.getValue().getName());
		assertEquals(1L, brandCaptor.getValue().getId());
		
		
	}
	
	
	
	
	

}
