import services =require('../services/picoPlacaService');
import {expect} from'chai'

describe('Services test',()=>{
    it('Check date format test 1',()=>{
        let date=services.getDateFormat('10/11/2020*')
        expect(date).to.be.eql(new Date(2020,10,10))

    })
    it('Check date format test 2',()=>{
        let date=services.getDateFormat('10/11/202')
        expect(date).to.be.eql(new Date(202,10,10))
    })
    it('Check date format test 3',()=>{
        const date=services.getDateFormat('12/07/2020')
        expect(date).to.be.eql(new Date(2020,6,12))
    })
    it('Get day of the week test 1',()=>{
        const date=services.getDateFormat('08/08/2020')
        expect(services.getDayOfWeek(date)).to.be.equal('Saturday')
    })
    it('Get day of the week test 2',()=>{
        const date=services.getDateFormat('09/12/2022')
        expect(services.getDayOfWeek(date)).to.be.equal('Friday')
    })
    it('Get day of the week test 3',()=>{
        const date=services.getDateFormat('18/01/2021')
        expect(services.getDayOfWeek(date)).to.be.equal('Monday')
    })
    
    it('Determine if the date is earlier 1',()=>{
        expect(services.determineDateEarlier(new Date(2021,8,5))).to.be.true;
    })
    it('Determine if the date is earlier 2',()=>{
        expect(services.determineDateEarlier(new Date(2019,8,5))).to.be.false;
    })
    it('Determine if the date is earlier 3',()=>{
        expect(services.determineDateEarlier(new Date(2020,10,5))).to.be.true;
    })
    it('Determine last number of "Placa" 1',()=>{
        expect(services.getLastNumberPlaca('1234')).to.be.equal(4)
    })
    it('Determine last number of "Placa" 2',()=>{
        expect(services.getLastNumberPlaca('5618')).to.be.equal(8)
        
    })
    it('Determine last number of "Placa" 3',()=>{
        expect(services.getLastNumberPlaca('8530')).to.be.eql(0)
    })

    it('Determine "Pico y Placa" scheldue 1', ()=>{
        expect(services.detHour('12:00')).to.be.equal(false)
    })
    it('Determine "Pico y Placa" scheldue 2', ()=>{
        expect(services.detHour('07:16')).to.be.equal(true)
    })
    it('Determine "Pico y Placa" scheldue 3', ()=>{
        expect(services.detHour('16:30')).to.be.equal(true)
    })
    it('Determine the day of "Pico y Placa" 1',()=>{
        expect(services.determinePicoYPlaca('8260','12/11/2020','15:30')).to.be.equal(false)
    })
    it('Determine the day of "Pico y Placa" 2',()=>{

        expect(services.determinePicoYPlaca('8261','17/08/2020','17:30')).to.be.equal(true)
    })
    it('Determine the day of "Pico y Placa" 3',()=>{
        expect(services.determinePicoYPlaca('8264','25/08/2020','07:30')).to.be.equal(true)
    })
})

describe('Model test',()=>{
    
})